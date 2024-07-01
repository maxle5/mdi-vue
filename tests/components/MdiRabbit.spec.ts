
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRabbit from "../../src/components/MdiRabbit.vue";

test("MdiRabbit snapshot", () => {
  const wrapper = mount(MdiRabbit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
