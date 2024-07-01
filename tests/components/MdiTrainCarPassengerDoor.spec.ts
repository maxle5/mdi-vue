
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrainCarPassengerDoor from "../../src/components/MdiTrainCarPassengerDoor.vue";

test("MdiTrainCarPassengerDoor snapshot", () => {
  const wrapper = mount(MdiTrainCarPassengerDoor, {});
  expect(wrapper.html()).toMatchSnapshot();
});
