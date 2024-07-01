
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrainVariant from "../../src/components/MdiTrainVariant.vue";

test("MdiTrainVariant snapshot", () => {
  const wrapper = mount(MdiTrainVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
