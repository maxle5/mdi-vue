
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRegisteredTrademark from "../../src/components/MdiRegisteredTrademark.vue";

test("MdiRegisteredTrademark snapshot", () => {
  const wrapper = mount(MdiRegisteredTrademark, {});
  expect(wrapper.html()).toMatchSnapshot();
});
