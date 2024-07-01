
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPliers from "../../src/components/MdiPliers.vue";

test("MdiPliers snapshot", () => {
  const wrapper = mount(MdiPliers, {});
  expect(wrapper.html()).toMatchSnapshot();
});
