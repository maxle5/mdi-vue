
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMoonFirstQuarter from "../../src/components/MdiMoonFirstQuarter.vue";

test("MdiMoonFirstQuarter snapshot", () => {
  const wrapper = mount(MdiMoonFirstQuarter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
