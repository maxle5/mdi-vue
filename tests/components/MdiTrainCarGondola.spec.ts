
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrainCarGondola from "../../src/components/MdiTrainCarGondola.vue";

test("MdiTrainCarGondola snapshot", () => {
  const wrapper = mount(MdiTrainCarGondola, {});
  expect(wrapper.html()).toMatchSnapshot();
});
