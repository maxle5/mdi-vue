
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInboxFull from "../../src/components/MdiInboxFull.vue";

test("MdiInboxFull snapshot", () => {
  const wrapper = mount(MdiInboxFull, {});
  expect(wrapper.html()).toMatchSnapshot();
});
