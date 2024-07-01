
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrainCarCaboose from "../../src/components/MdiTrainCarCaboose.vue";

test("MdiTrainCarCaboose snapshot", () => {
  const wrapper = mount(MdiTrainCarCaboose, {});
  expect(wrapper.html()).toMatchSnapshot();
});
