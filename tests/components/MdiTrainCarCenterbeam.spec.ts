
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrainCarCenterbeam from "../../src/components/MdiTrainCarCenterbeam.vue";

test("MdiTrainCarCenterbeam snapshot", () => {
  const wrapper = mount(MdiTrainCarCenterbeam, {});
  expect(wrapper.html()).toMatchSnapshot();
});
