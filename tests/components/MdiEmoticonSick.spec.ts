
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonSick from "../../src/components/MdiEmoticonSick.vue";

test("MdiEmoticonSick snapshot", () => {
  const wrapper = mount(MdiEmoticonSick, {});
  expect(wrapper.html()).toMatchSnapshot();
});
