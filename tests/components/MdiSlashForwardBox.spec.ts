
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSlashForwardBox from "../../src/components/MdiSlashForwardBox.vue";

test("MdiSlashForwardBox snapshot", () => {
  const wrapper = mount(MdiSlashForwardBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
