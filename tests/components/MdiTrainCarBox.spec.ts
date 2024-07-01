
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrainCarBox from "../../src/components/MdiTrainCarBox.vue";

test("MdiTrainCarBox snapshot", () => {
  const wrapper = mount(MdiTrainCarBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
