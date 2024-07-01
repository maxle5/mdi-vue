
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiForklift from "../../src/components/MdiForklift.vue";

test("MdiForklift snapshot", () => {
  const wrapper = mount(MdiForklift, {});
  expect(wrapper.html()).toMatchSnapshot();
});
