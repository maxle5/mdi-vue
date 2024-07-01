
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMoonWaningCrescent from "../../src/components/MdiMoonWaningCrescent.vue";

test("MdiMoonWaningCrescent snapshot", () => {
  const wrapper = mount(MdiMoonWaningCrescent, {});
  expect(wrapper.html()).toMatchSnapshot();
});
