
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiIdentifier from "../../src/components/MdiIdentifier.vue";

test("MdiIdentifier snapshot", () => {
  const wrapper = mount(MdiIdentifier, {});
  expect(wrapper.html()).toMatchSnapshot();
});
