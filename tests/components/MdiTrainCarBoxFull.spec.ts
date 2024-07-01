
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrainCarBoxFull from "../../src/components/MdiTrainCarBoxFull.vue";

test("MdiTrainCarBoxFull snapshot", () => {
  const wrapper = mount(MdiTrainCarBoxFull, {});
  expect(wrapper.html()).toMatchSnapshot();
});
