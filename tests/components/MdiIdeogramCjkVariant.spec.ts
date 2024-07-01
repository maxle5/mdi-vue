
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiIdeogramCjkVariant from "../../src/components/MdiIdeogramCjkVariant.vue";

test("MdiIdeogramCjkVariant snapshot", () => {
  const wrapper = mount(MdiIdeogramCjkVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
