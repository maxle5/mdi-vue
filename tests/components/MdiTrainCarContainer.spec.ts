
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrainCarContainer from "../../src/components/MdiTrainCarContainer.vue";

test("MdiTrainCarContainer snapshot", () => {
  const wrapper = mount(MdiTrainCarContainer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
