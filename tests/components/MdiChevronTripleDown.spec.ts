
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChevronTripleDown from "../../src/components/MdiChevronTripleDown.vue";

test("MdiChevronTripleDown snapshot", () => {
  const wrapper = mount(MdiChevronTripleDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
