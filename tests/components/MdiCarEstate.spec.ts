
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarEstate from "../../src/components/MdiCarEstate.vue";

test("MdiCarEstate snapshot", () => {
  const wrapper = mount(MdiCarEstate, {});
  expect(wrapper.html()).toMatchSnapshot();
});
