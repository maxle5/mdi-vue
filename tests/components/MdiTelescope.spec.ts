
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTelescope from "../../src/components/MdiTelescope.vue";

test("MdiTelescope snapshot", () => {
  const wrapper = mount(MdiTelescope, {});
  expect(wrapper.html()).toMatchSnapshot();
});
