
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLinkVariant from "../../src/components/MdiLinkVariant.vue";

test("MdiLinkVariant snapshot", () => {
  const wrapper = mount(MdiLinkVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
