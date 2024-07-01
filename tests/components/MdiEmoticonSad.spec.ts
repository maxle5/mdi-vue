
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonSad from "../../src/components/MdiEmoticonSad.vue";

test("MdiEmoticonSad snapshot", () => {
  const wrapper = mount(MdiEmoticonSad, {});
  expect(wrapper.html()).toMatchSnapshot();
});
