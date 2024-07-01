
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBeakerQuestion from "../../src/components/MdiBeakerQuestion.vue";

test("MdiBeakerQuestion snapshot", () => {
  const wrapper = mount(MdiBeakerQuestion, {});
  expect(wrapper.html()).toMatchSnapshot();
});
