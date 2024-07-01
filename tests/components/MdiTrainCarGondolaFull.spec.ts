
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrainCarGondolaFull from "../../src/components/MdiTrainCarGondolaFull.vue";

test("MdiTrainCarGondolaFull snapshot", () => {
  const wrapper = mount(MdiTrainCarGondolaFull, {});
  expect(wrapper.html()).toMatchSnapshot();
});
