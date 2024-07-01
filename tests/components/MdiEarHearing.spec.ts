
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEarHearing from "../../src/components/MdiEarHearing.vue";

test("MdiEarHearing snapshot", () => {
  const wrapper = mount(MdiEarHearing, {});
  expect(wrapper.html()).toMatchSnapshot();
});
