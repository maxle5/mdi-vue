
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountStar from "../../src/components/MdiAccountStar.vue";

test("MdiAccountStar snapshot", () => {
  const wrapper = mount(MdiAccountStar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
