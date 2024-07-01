
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrainCarBoxOpen from "../../src/components/MdiTrainCarBoxOpen.vue";

test("MdiTrainCarBoxOpen snapshot", () => {
  const wrapper = mount(MdiTrainCarBoxOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
