
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookOpenBlankVariant from "../../src/components/MdiBookOpenBlankVariant.vue";

test("MdiBookOpenBlankVariant snapshot", () => {
  const wrapper = mount(MdiBookOpenBlankVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
