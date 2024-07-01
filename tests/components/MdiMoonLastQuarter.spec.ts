
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMoonLastQuarter from "../../src/components/MdiMoonLastQuarter.vue";

test("MdiMoonLastQuarter snapshot", () => {
  const wrapper = mount(MdiMoonLastQuarter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
