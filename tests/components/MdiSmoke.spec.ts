
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSmoke from "../../src/components/MdiSmoke.vue";

test("MdiSmoke snapshot", () => {
  const wrapper = mount(MdiSmoke, {});
  expect(wrapper.html()).toMatchSnapshot();
});
