
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrainCarFlatbedTank from "../../src/components/MdiTrainCarFlatbedTank.vue";

test("MdiTrainCarFlatbedTank snapshot", () => {
  const wrapper = mount(MdiTrainCarFlatbedTank, {});
  expect(wrapper.html()).toMatchSnapshot();
});
