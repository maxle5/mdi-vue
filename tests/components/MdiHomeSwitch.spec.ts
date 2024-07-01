
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeSwitch from "../../src/components/MdiHomeSwitch.vue";

test("MdiHomeSwitch snapshot", () => {
  const wrapper = mount(MdiHomeSwitch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
