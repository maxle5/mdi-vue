
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLinkPlus from "../../src/components/MdiLinkPlus.vue";

test("MdiLinkPlus snapshot", () => {
  const wrapper = mount(MdiLinkPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
