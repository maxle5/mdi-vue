
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrainCarTank from "../../src/components/MdiTrainCarTank.vue";

test("MdiTrainCarTank snapshot", () => {
  const wrapper = mount(MdiTrainCarTank, {});
  expect(wrapper.html()).toMatchSnapshot();
});
