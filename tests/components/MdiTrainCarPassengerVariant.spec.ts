
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrainCarPassengerVariant from "../../src/components/MdiTrainCarPassengerVariant.vue";

test("MdiTrainCarPassengerVariant snapshot", () => {
  const wrapper = mount(MdiTrainCarPassengerVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
