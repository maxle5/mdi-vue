
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEllipse from "../../src/components/MdiEllipse.vue";

test("MdiEllipse snapshot", () => {
  const wrapper = mount(MdiEllipse, {});
  expect(wrapper.html()).toMatchSnapshot();
});
