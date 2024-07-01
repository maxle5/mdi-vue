
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInboxMultiple from "../../src/components/MdiInboxMultiple.vue";

test("MdiInboxMultiple snapshot", () => {
  const wrapper = mount(MdiInboxMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
