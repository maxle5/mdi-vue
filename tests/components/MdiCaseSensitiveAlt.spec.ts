
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCaseSensitiveAlt from "../../src/components/MdiCaseSensitiveAlt.vue";

test("MdiCaseSensitiveAlt snapshot", () => {
  const wrapper = mount(MdiCaseSensitiveAlt, {});
  expect(wrapper.html()).toMatchSnapshot();
});
