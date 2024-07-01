
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrain from "../../src/components/MdiTrain.vue";

test("MdiTrain snapshot", () => {
  const wrapper = mount(MdiTrain, {});
  expect(wrapper.html()).toMatchSnapshot();
});
