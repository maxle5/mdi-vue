
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSlashForward from "../../src/components/MdiSlashForward.vue";

test("MdiSlashForward snapshot", () => {
  const wrapper = mount(MdiSlashForward, {});
  expect(wrapper.html()).toMatchSnapshot();
});
