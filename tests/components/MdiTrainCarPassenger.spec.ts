
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrainCarPassenger from "../../src/components/MdiTrainCarPassenger.vue";

test("MdiTrainCarPassenger snapshot", () => {
  const wrapper = mount(MdiTrainCarPassenger, {});
  expect(wrapper.html()).toMatchSnapshot();
});
