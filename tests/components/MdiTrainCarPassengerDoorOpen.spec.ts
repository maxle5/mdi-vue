
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrainCarPassengerDoorOpen from "../../src/components/MdiTrainCarPassengerDoorOpen.vue";

test("MdiTrainCarPassengerDoorOpen snapshot", () => {
  const wrapper = mount(MdiTrainCarPassengerDoorOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
