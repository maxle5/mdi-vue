
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonSickOutline from "../../src/components/MdiEmoticonSickOutline.vue";

test("MdiEmoticonSickOutline snapshot", () => {
  const wrapper = mount(MdiEmoticonSickOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
