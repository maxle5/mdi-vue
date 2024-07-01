
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiToaster from "../../src/components/MdiToaster.vue";

test("MdiToaster snapshot", () => {
  const wrapper = mount(MdiToaster, {});
  expect(wrapper.html()).toMatchSnapshot();
});
