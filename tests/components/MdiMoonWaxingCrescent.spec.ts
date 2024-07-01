
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMoonWaxingCrescent from "../../src/components/MdiMoonWaxingCrescent.vue";

test("MdiMoonWaxingCrescent snapshot", () => {
  const wrapper = mount(MdiMoonWaxingCrescent, {});
  expect(wrapper.html()).toMatchSnapshot();
});
