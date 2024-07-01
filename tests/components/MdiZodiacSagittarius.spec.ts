
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiZodiacSagittarius from "../../src/components/MdiZodiacSagittarius.vue";

test("MdiZodiacSagittarius snapshot", () => {
  const wrapper = mount(MdiZodiacSagittarius, {});
  expect(wrapper.html()).toMatchSnapshot();
});
