
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRollerSkate from "../../src/components/MdiRollerSkate.vue";

test("MdiRollerSkate snapshot", () => {
  const wrapper = mount(MdiRollerSkate, {});
  expect(wrapper.html()).toMatchSnapshot();
});
