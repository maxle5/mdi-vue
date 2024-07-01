
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonSadOutline from "../../src/components/MdiEmoticonSadOutline.vue";

test("MdiEmoticonSadOutline snapshot", () => {
  const wrapper = mount(MdiEmoticonSadOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
