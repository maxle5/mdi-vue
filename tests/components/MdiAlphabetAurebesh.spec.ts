
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphabetAurebesh from "../../src/components/MdiAlphabetAurebesh.vue";

test("MdiAlphabetAurebesh snapshot", () => {
  const wrapper = mount(MdiAlphabetAurebesh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
