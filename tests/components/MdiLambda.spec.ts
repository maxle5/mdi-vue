
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLambda from "../../src/components/MdiLambda.vue";

test("MdiLambda snapshot", () => {
  const wrapper = mount(MdiLambda, {});
  expect(wrapper.html()).toMatchSnapshot();
});
