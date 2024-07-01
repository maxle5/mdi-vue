
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRecycleVariant from "../../src/components/MdiRecycleVariant.vue";

test("MdiRecycleVariant snapshot", () => {
  const wrapper = mount(MdiRecycleVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
